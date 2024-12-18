
import { useState } from "react";

interface Comment {
  id: number;
  text: string;
}

const CommentSection: React.FC = () => {
  // State to hold all comments
  const [comments, setComments] = useState<Comment[]>([]);
  // State for the new comment text
  const [newComment, setNewComment] = useState<string>("");
  // State to track which comment is being edited
  const [editIndex, setEditIndex] = useState<number | null>(null);
  // State for the edited comment text
  const [editedComment, setEditedComment] = useState<string>("");
  // State to show or hide emoji picker
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  // Simple list of emojis
  const emojis = ["😊", "😂", "😍", "😢", "😎", "👍", "❤️", "😂" ,"😉", "🤞", "🤷‍♂️", "😜", "👏", "😃", "😆", "🥰", "🤗", "🙃", "😜", "😡", "🙈", "👀"];

  // Function to add a new comment
  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const newCommentObj = { id: Date.now(), text: newComment };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  // Function to handle editing a comment
  const handleEditComment = (index: number) => {
    setEditIndex(index);
    setEditedComment(comments[index].text); // Set the current text in edit state
  };

  // Function to save the edited comment
  const handleSaveEditedComment = () => {
    if (editedComment.trim() !== "") {
      const updatedComments = comments.map((comment, index) =>
        index === editIndex ? { ...comment, text: editedComment } : comment
      );
      setComments(updatedComments);
      setEditIndex(null);
      setEditedComment("");
    }
  };

  // Function to handle emoji click
  const handleEmojiClick = (emoji: string) => {
    setNewComment((prev) => prev + emoji); // Add emoji to the comment text
  };

  return (
    <div className="p-4 border rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Comments</h2>

      {/* Comment Input */}
      <div className="mb-4 relative">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded-lg"
          rows={3}
          placeholder="Write your comment..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600"
        >
          Add Comment
        </button>
        <button
          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          className="mt-2 ml-2 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-600"
        >
          {showEmojiPicker ? "Close Emoji Picker" : "Add Emoji"}
        </button>
      </div>

      {/* Emoji Picker */}
      {showEmojiPicker && (
        <div className="absolute bg-white p-2 border rounded-lg mt-2">
          <div className="grid grid-cols-4 gap-2">
            {emojis.map((emoji, index) => (
              <button
                key={index}
                onClick={() => handleEmojiClick(emoji)}
                className="p-2 text-xl"
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Display Comments */}
      <div>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div key={comment.id} className="p-2 border-b last:border-none">
              {editIndex === index ? (
                <>
                  <textarea
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                    rows={3}
                  />
                  <button
                    onClick={handleSaveEditedComment}
                    className="mt-2 px-4 py-2 bg-purple-700 text-white rounded hover:bg-blue-700"
                  >
                    Save Comment
                  </button>
                </>
              ) : (
                <>
                  <p>{comment.text}</p>
                  <button
                    onClick={() => handleEditComment(index)}
                    className="mt-2 px-4 py-2 bg-purple-700 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
