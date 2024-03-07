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
} from "./endpoint";

export class ProjectBookClient extends EndpointClient {
  readonly LoadNotionPage = this.endpointBuilder(LoadNotionPage);
  readonly ReloadNotionPage = this.endpointBuilder(ReloadNotionPage);
  readonly DeleteNotionPage = this.endpointBuilder(DeleteNotionPage);
  readonly ListNotionPage = this.endpointBuilder(ListNotionPage);
  readonly GetNotionPage = this.endpointBuilder(GetNotionPage);

  readonly ListUser = this.endpointBuilder(ListUser);
  readonly GetUser = this.endpointBuilder(GetUser);
  readonly CreateUser = this.endpointBuilder(CreateUser);
  readonly SearchUser = this.endpointBuilder(SearchUser);
  readonly UpdateUser = this.endpointBuilder(UpdateUser);
  readonly UpdateUserProfileImage = this.endpointBuilder(
    UpdateUserProfileImage
  );

  readonly ListUserDevice = this.endpointBuilder(ListUserDevice);
  readonly DeleteUserDevice = this.endpointBuilder(DeleteUserDevice);

  readonly CreateUserOrder = this.endpointBuilder(CreateUserOrder);
  readonly ApproveUserOrder = this.endpointBuilder(ApproveUserOrder);
  readonly CancelUserOrder = this.endpointBuilder(CancelUserOrder);
  readonly ListUserOrder = this.endpointBuilder(ListUserOrder);
  readonly CreateAndApproveCashUserOrder = this.endpointBuilder(
    CreateAndApproveCashUserOrder
  );

  readonly ListUserBook = this.endpointBuilder(ListUserBook);

  readonly AuthOAuthGoogle = this.endpointBuilder(AuthOAuthGoogle);

  readonly IssueToken = this.endpointBuilder(IssueToken);

  readonly ListBook = this.endpointBuilder(ListBook);
  readonly ListAdminBook = this.endpointBuilder(ListAdminBook);
  readonly GetBook = this.endpointBuilder(GetBook);
  readonly GetAdminBook = this.endpointBuilder(GetAdminBook);
  readonly SearchBook = this.endpointBuilder(SearchBook);
  readonly CreateBook = this.endpointBuilder(CreateBook);
  readonly UpdateBook = this.endpointBuilder(UpdateBook);
  readonly DeleteBook = this.endpointBuilder(DeleteBook);

  readonly AddBookAuthor = this.endpointBuilder(AddBookAuthor);
  readonly UpdateBookAuthor = this.endpointBuilder(UpdateBookAuthor);
  readonly DeleteBookAuthor = this.endpointBuilder(DeleteBookAuthor);

  readonly ListSection = this.endpointBuilder(ListSection);
  readonly GetSection = this.endpointBuilder(GetSection);
  readonly GetIntroductionSection = this.endpointBuilder(
    GetIntroductionSection
  );
  readonly FetchSection = this.endpointBuilder(FetchSection);
  readonly LoadSection = this.endpointBuilder(LoadSection);
  readonly UpdateSection = this.endpointBuilder(UpdateSection);
  readonly DeleteSection = this.endpointBuilder(DeleteSection);

  readonly ExportSectionPDF = this.endpointBuilder(ExportSectionPDF);

  readonly ListBlockComment = this.endpointBuilder(ListBlockComment);
  readonly CreateBlockComment = this.endpointBuilder(CreateBlockComment);
  readonly EditBlockComment = this.endpointBuilder(EditBlockComment);
  readonly DeleteBlockComment = this.endpointBuilder(DeleteBlockComment);

  readonly ListBlockCommentReaction = this.endpointBuilder(
    ListBlockCommentReaction
  );
  readonly CreateBlockCommentReaction = this.endpointBuilder(
    CreateBlockCommentReaction
  );
  readonly DeleteBlockCommentReaction = this.endpointBuilder(
    DeleteBlockCommentReaction
  );

  readonly ListBlockMemo = this.endpointBuilder(ListBlockMemo);
  readonly CreateBlockMemo = this.endpointBuilder(CreateBlockMemo);
  readonly UpdateBlockMemo = this.endpointBuilder(UpdateBlockMemo);
  readonly DeleteBlockMemo = this.endpointBuilder(DeleteBlockMemo);

  readonly ListBookmark = this.endpointBuilder(ListBookmark);
  readonly CreateBookmark = this.endpointBuilder(CreateBookmark);
  readonly DeleteBookmark = this.endpointBuilder(DeleteBookmark);

  readonly GetOrder = this.endpointBuilder(GetOrder);
  readonly ListOrder = this.endpointBuilder(ListOrder);

  readonly UploadFile = this.endpointBuilder(UploadFile);
}
