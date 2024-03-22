import { EndpointClient } from "endpoint-client";
import {
  AddBookAuthor,
  ApproveUserOrder,
  IssueToken,
  AuthOAuthGoogle,
  CancelUserOrder,
  CreateAndApproveCashUserOrder,
  CreateBlockComment,
  CreateBlockCommentReaction,
  CreateBlockMemo,
  CreateBook,
  CreateBookmark,
  CreateUser,
  CreateUserOrder,
  DeleteBlockComment,
  DeleteBlockCommentReaction,
  DeleteBlockMemo,
  DeleteBook,
  DeleteBookAuthor,
  DeleteBookmark,
  DeleteNotionPage,
  DeleteSection,
  DeleteUserDevice,
  EditBlockComment,
  ExportSectionPDF,
  FetchSection,
  GetAdminBook,
  GetBook,
  GetIntroductionSection,
  GetNotionPage,
  GetOrder,
  GetSection,
  GetUser,
  ListAdminBook,
  ListBlockComment,
  ListBlockCommentReaction,
  ListBlockMemo,
  ListBook,
  ListBookmark,
  ListNotionPage,
  ListOrder,
  ListSection,
  ListUser,
  ListUserBook,
  ListUserDevice,
  ListUserOrder,
  LoadNotionPage,
  LoadSection,
  ReloadNotionPage,
  SearchBook,
  SearchUser,
  UpdateBlockMemo,
  UpdateBook,
  UpdateBookAuthor,
  UpdateSection,
  UpdateUser,
  UpdateUserProfileImage,
  UploadFile,
  DeleteUser,
  RegisterUserNotificationDevice,
  GetIsBlockCommentNotificationOn,
  SetBlockCommentNotificationOn,
  SetBlockCommentNotificationOff,
  ListUserNotification,
  DeleteUserNotification,
  GetUserSetting,
  UpdateUserSetting,
} from "./endpoint";

export class UniBookClient extends EndpointClient {
  /**
   * Notion Page
   */
  readonly LoadNotionPage = this.endpointBuilder(LoadNotionPage);
  readonly ReloadNotionPage = this.endpointBuilder(ReloadNotionPage);
  readonly DeleteNotionPage = this.endpointBuilder(DeleteNotionPage);
  readonly ListNotionPage = this.endpointBuilder(ListNotionPage);
  readonly GetNotionPage = this.endpointBuilder(GetNotionPage);

  /**
   * User
   */
  readonly ListUser = this.endpointBuilder(ListUser);
  readonly GetUser = this.endpointBuilder(GetUser);
  readonly CreateUser = this.endpointBuilder(CreateUser);
  readonly SearchUser = this.endpointBuilder(SearchUser);
  readonly UpdateUser = this.endpointBuilder(UpdateUser);
  readonly UpdateUserProfileImage = this.endpointBuilder(
    UpdateUserProfileImage
  );
  readonly DeleteUser = this.endpointBuilder(DeleteUser);

  // User Setting
  readonly GetUserSetting = this.endpointBuilder(GetUserSetting);
  readonly UpdateUserSetting = this.endpointBuilder(UpdateUserSetting);

  // User Device
  readonly ListUserDevice = this.endpointBuilder(ListUserDevice);
  readonly DeleteUserDevice = this.endpointBuilder(DeleteUserDevice);

  readonly ListUserNotification = this.endpointBuilder(ListUserNotification);
  readonly DeleteUserNotification = this.endpointBuilder(
    DeleteUserNotification
  );

  // User Notification
  readonly RegisterUserNotificationDevice = this.endpointBuilder(
    RegisterUserNotificationDevice
  );

  // User Order
  readonly CreateUserOrder = this.endpointBuilder(CreateUserOrder);
  readonly ApproveUserOrder = this.endpointBuilder(ApproveUserOrder);
  readonly CancelUserOrder = this.endpointBuilder(CancelUserOrder);
  readonly ListUserOrder = this.endpointBuilder(ListUserOrder);
  readonly CreateAndApproveCashUserOrder = this.endpointBuilder(
    CreateAndApproveCashUserOrder
  );

  // User Book
  readonly ListUserBook = this.endpointBuilder(ListUserBook);

  /**
   * Auth
   */
  readonly AuthOAuthGoogle = this.endpointBuilder(AuthOAuthGoogle);

  readonly IssueToken = this.endpointBuilder(IssueToken);

  /**
   * Book
   */
  readonly ListBook = this.endpointBuilder(ListBook);
  readonly ListAdminBook = this.endpointBuilder(ListAdminBook);
  readonly GetBook = this.endpointBuilder(GetBook);
  readonly GetAdminBook = this.endpointBuilder(GetAdminBook);
  readonly SearchBook = this.endpointBuilder(SearchBook);
  readonly CreateBook = this.endpointBuilder(CreateBook);
  readonly UpdateBook = this.endpointBuilder(UpdateBook);
  readonly DeleteBook = this.endpointBuilder(DeleteBook);

  // Book Author
  readonly AddBookAuthor = this.endpointBuilder(AddBookAuthor);
  readonly UpdateBookAuthor = this.endpointBuilder(UpdateBookAuthor);
  readonly DeleteBookAuthor = this.endpointBuilder(DeleteBookAuthor);

  /**
   * Section
   */
  readonly ListSection = this.endpointBuilder(ListSection);
  readonly GetSection = this.endpointBuilder(GetSection);
  readonly GetIntroductionSection = this.endpointBuilder(
    GetIntroductionSection
  );
  readonly FetchSection = this.endpointBuilder(FetchSection);
  readonly LoadSection = this.endpointBuilder(LoadSection);
  readonly UpdateSection = this.endpointBuilder(UpdateSection);
  readonly DeleteSection = this.endpointBuilder(DeleteSection);

  // Section Export
  readonly ExportSectionPDF = this.endpointBuilder(ExportSectionPDF);

  // Section Block Comment
  readonly ListBlockComment = this.endpointBuilder(ListBlockComment);
  readonly CreateBlockComment = this.endpointBuilder(CreateBlockComment);
  readonly EditBlockComment = this.endpointBuilder(EditBlockComment);
  readonly DeleteBlockComment = this.endpointBuilder(DeleteBlockComment);

  // Section Block Comment Reaction
  readonly ListBlockCommentReaction = this.endpointBuilder(
    ListBlockCommentReaction
  );
  readonly CreateBlockCommentReaction = this.endpointBuilder(
    CreateBlockCommentReaction
  );
  readonly DeleteBlockCommentReaction = this.endpointBuilder(
    DeleteBlockCommentReaction
  );

  // Section Block Comment Notification
  readonly GetIsBlockCommentNotificationOn = this.endpointBuilder(
    GetIsBlockCommentNotificationOn
  );
  readonly SetBlockCommentNotificationOn = this.endpointBuilder(
    SetBlockCommentNotificationOn
  );
  readonly SetBlockCommentNotificationOff = this.endpointBuilder(
    SetBlockCommentNotificationOff
  );

  // Section Block Memo
  readonly ListBlockMemo = this.endpointBuilder(ListBlockMemo);
  readonly CreateBlockMemo = this.endpointBuilder(CreateBlockMemo);
  readonly UpdateBlockMemo = this.endpointBuilder(UpdateBlockMemo);
  readonly DeleteBlockMemo = this.endpointBuilder(DeleteBlockMemo);

  // Section Bookmark
  readonly ListBookmark = this.endpointBuilder(ListBookmark);
  readonly CreateBookmark = this.endpointBuilder(CreateBookmark);
  readonly DeleteBookmark = this.endpointBuilder(DeleteBookmark);

  /**
   * Order
   */
  readonly GetOrder = this.endpointBuilder(GetOrder);
  readonly ListOrder = this.endpointBuilder(ListOrder);

  /**
   * File
   */
  readonly UploadFile = this.endpointBuilder(UploadFile);
}
