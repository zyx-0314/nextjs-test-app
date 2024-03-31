import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const SignUpModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Sign up now</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Sing Up</DialogTitle>
                    <DialogDescription>
                        for the latest updates and offers
                    </DialogDescription>
                </DialogHeader>
                <form
                    className="flex flex-col w-full gap-3"
                >
                    <Label htmlFor="email">Email </Label>
                    <Input id="email" name="email" />
                    <Button type="submit">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}