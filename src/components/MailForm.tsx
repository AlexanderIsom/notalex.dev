import { Button } from "./ui/button";
import { z } from "zod";
import {
	Dialog,
	DialogContent,
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
import { createForm } from "@modular-forms/solid";

const formSchema = z.object({
	email: z.string().email().min(3, {
		message: "Email must be at least 3 characters",
	}),
	name: z.string().min(5, { message: "name must be at least 5 characters" }),
	message: z
		.string()
		.min(5, { message: "message must be at least 5 characters" }),
});

export default function MailFormDialog() {
	const [contactForm, { Form, Field, FieldArray }] =
		createForm<z.infer<typeof formSchema>>();

	return (
		<Dialog>
			<DialogTrigger>contact</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Contact me</DialogTitle>
				</DialogHeader>
				<form>
					<TextField class="grid w-full  items-center gap-1.5 ">
						<TextFieldLabel for="name">Your Name</TextFieldLabel>
						<TextFieldInput type="text" id="name" />
					</TextField>
					<TextField class="grid w-full items-center gap-1.5 ">
						<TextFieldLabel for="email">Your Email</TextFieldLabel>
						<TextFieldInput type="email" id="email" />
					</TextField>
					<TextField class="grid w-full  items-center gap-1.5 ">
						<TextFieldLabel for="message">Message</TextFieldLabel>
						<TextFieldTextArea
							id="message"
							placeholder="Type your message here."
						/>
					</TextField>
					<Button>Send</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
