import { createForm, zodForm } from "@modular-forms/solid";
import Mail from "nodemailer/lib/mailer";
import { z } from "zod";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "./ui/dialog";
import {
	TextField,
	TextFieldInput,
	TextFieldLabel,
	TextFieldTextArea,
} from "./ui/text-field";

import { action, useAction } from "@solidjs/router";
import nodemailer from "nodemailer";
import { createSignal } from "solid-js";
import { showToast } from "./ui/toast";
import { IconSpinner } from "./Icons";

const ContactSchema = z.object({
	email: z.string().email(),
	name: z.string().min(2, { message: "Name must be at least 2 characters" }),
	message: z
		.string()
		.min(5, { message: "Message must be at least 5 characters" }),
});

type ContactForm = z.infer<typeof ContactSchema>;

const submitForm = action(async (formData: ContactForm) => {
	"use server";
	const { email, name, message } = formData;

	const transport = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.MAILER_EMAIL,
			pass: process.env.MAILER_PASSWORD,
		},
	});

	const mailOptions: Mail.Options = {
		from: process.env.MAILER_EMAIL,
		to: process.env.MAILER_TARGET,
		// cc: email, (uncomment this line if you want to send a copy to the sender)
		subject: `Message from ${name} (${email})`,
		text: `This is a message via notalex.dev from ${name} (${email}): ${message} `,
	};

	const sendMailPromise = () =>
		new Promise<string>((resolve, reject) => {
			transport.sendMail(mailOptions, function (err) {
				if (!err) {
					resolve("Email sent");
				} else {
					reject(err.message);
				}
			});
		});

	try {
		await sendMailPromise();
		return true;
	} catch (err) {
		console.log(err);
		return false;
	}
});

export default function MailFormDialog() {
	const [open, setOpen] = createSignal(false);
	const [contactForm, { Form, Field, FieldArray }] = createForm<ContactForm>({
		validate: zodForm(ContactSchema),
	});

	const submitMessage = useAction(submitForm);

	return (
		<Dialog open={open()} onOpenChange={setOpen}>
			<DialogTrigger>contact</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Contact me</DialogTitle>
					<DialogDescription>
						{`Please include your contact details (phone number or email) and the company you represent 😊`}
					</DialogDescription>
				</DialogHeader>

				<Form
					onSubmit={async (data) => {
						const success = await submitMessage(data);
						setOpen(false);
						if (success) {
							showToast({
								title: "Message Sent!",
								description:
									"Thank you for your message, i'll get back to you as soon as possible 😃",
							});
						} else {
							showToast({
								title: "Error!",
								variant: "error",
								description: "Please try again shortly.",
							});
						}
					}}
					class="flex flex-col gap-4"
				>
					<TextField
						class="grid w-full items-center gap-1.5 "
						disabled={contactForm.submitting}
					>
						<TextFieldLabel for="name">Your Name</TextFieldLabel>
						<Field name="name">
							{(field, props) => (
								<>
									<TextFieldInput {...props} type="text" id="name" />
									{field.error && <div>{field.error}</div>}
								</>
							)}
						</Field>
					</TextField>

					<TextField
						class="grid w-full items-center gap-1.5 "
						disabled={contactForm.submitting}
					>
						<TextFieldLabel for="email">Your Email</TextFieldLabel>
						<Field name="email">
							{(field, props) => (
								<>
									<TextFieldInput {...props} type="email" id="email" />
									{field.error && <div>{field.error}</div>}
								</>
							)}
						</Field>
					</TextField>

					<TextField
						class="grid w-full items-center gap-1.5 "
						disabled={contactForm.submitting}
					>
						<TextFieldLabel for="message">Message</TextFieldLabel>
						<Field name="message">
							{(field, props) => (
								<>
									<TextFieldTextArea
										{...props}
										class="max-h-96"
										id="message"
										placeholder="Type your message here."
									/>
									{field.error && <div>{field.error}</div>}
								</>
							)}
						</Field>
					</TextField>
					<Button
						type="submit"
						disabled={contactForm.submitting}
						class="items-center text-center"
					>
						{contactForm.submitting ? (
							<>
								{"Sending"}
								<IconSpinner class="ml-1 w-5 h-5 animate-spin" />
							</>
						) : (
							"Send"
						)}
					</Button>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
