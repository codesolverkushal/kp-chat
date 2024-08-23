import express from 'express';
import { isAuthenticated } from "../middlewares/auth.js";
import { addMembers, getMyChat, getMyGroups, leaveGroup, newGroupChat, removeMember, sendAttachments,getChatDetails,renameGroup,deleteChat, getMessages } from '../controllers/chat.js';
import { attachmentsMulter } from '../middlewares/multer.js';
import { addMemberValidator, chatIdValidator, newGroupValidator, removeMemberValidator, validateHandler,sendAttachmentsValidator, renameValidator } from '../lib/validators.js';
const app = express.Router();





app.use(isAuthenticated);

app.post("/new",newGroupValidator(),validateHandler ,newGroupChat);

app.get("/my",getMyChat);

app.get("/my/groups",getMyGroups);

app.put("/addmembers", addMemberValidator(),validateHandler, addMembers);

app.put("/removemember",removeMemberValidator(),validateHandler,removeMember);

app.delete("/leave/:id",chatIdValidator(), validateHandler,leaveGroup);


app.post("/message",attachmentsMulter,sendAttachmentsValidator(),validateHandler,sendAttachments);

app.get("/message/:id",chatIdValidator(), validateHandler, getMessages);
// Get Chat Details, rename,delete
app
  .route("/:id")
  .get(chatIdValidator(), validateHandler, getChatDetails)
  .put(renameValidator(), validateHandler,renameGroup)
  .delete(chatIdValidator(), validateHandler, deleteChat);


export default app;
