import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

export const CommentCreationModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                >
                    Why not, Leave Yours?
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create a Comment</DialogTitle>
                    <DialogDescription>
                        Please leave a comment below.
                    </DialogDescription>
                </DialogHeader>
                <form
                    className="flex flex-col w-full gap-3"
                >
                    <Label htmlFor="comment">Comment:</Label>
                    <Textarea id="comment" name="comment" rows={4} />
                    <Button type="submit">Submit</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
