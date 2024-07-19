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

export default function MailFormDialog() {
	const fn = (form: FormData) => {};
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
