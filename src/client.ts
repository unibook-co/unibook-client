import { EndpointClient } from "endpoint-client";
import {
    ApproveUserOrder,
    AuthOAuthGoogle,
    CancelUserOrder,
    CreateAndApproveCashUserOrder,
    CreateBlockComment,
    CreateBlockCommentReaction,
    CreateBook,
    CreateBookmark,
    CreateUserOrder,
    DeleteBlockComment,
    DeleteBlockCommentReaction,
    DeleteBook,
    DeleteBookmark,
    DeleteSection,
    EditBlockComment,
    FetchSection,
    GetAdminBook,
    GetBook,
    GetIntroductionSection,
    GetOrder,
    GetSection,
    GetUser,
    ListBlockComment,
    ListBlockCommentReaction,
    ListBook,
    ListBookmark,
    ListOrder,
    ListSection,
    ListUser,
    ListUserBook,
    ListUserOrder,
    LoadSection,
    SearchBook,
    SearchUser,
    UpdateBook,
    UpdateSection,
    UpdateUser,
    UpdateUserProfileImage,
} from "./endpoint";

export class ProjectBookClient extends EndpointClient {
    readonly ListUser = this.endpointBuilder(ListUser);
    readonly GetUser = this.endpointBuilder(GetUser);
    readonly SearchUser = this.endpointBuilder(SearchUser);
    readonly UpdateUser = this.endpointBuilder(UpdateUser);
    readonly UpdateUserProfileImage = this.endpointBuilder(UpdateUserProfileImage);

    readonly CreateUserOrder = this.endpointBuilder(CreateUserOrder);
    readonly ApproveUserOrder = this.endpointBuilder(ApproveUserOrder);
    readonly CancelUserOrder = this.endpointBuilder(CancelUserOrder);
    readonly ListUserOrder = this.endpointBuilder(ListUserOrder);
    readonly CreateAndApproveCashUserOrder = this.endpointBuilder(CreateAndApproveCashUserOrder)

    readonly ListUserBook = this.endpointBuilder(ListUserBook);

    readonly AuthOAuthGoogle = this.endpointBuilder(AuthOAuthGoogle);

    readonly ListBook = this.endpointBuilder(ListBook);
    readonly GetBook = this.endpointBuilder(GetBook);
    readonly GetAdminBook = this.endpointBuilder(GetAdminBook);
    readonly SearchBook = this.endpointBuilder(SearchBook);
    readonly CreateBook = this.endpointBuilder(CreateBook);
    readonly UpdateBook = this.endpointBuilder(UpdateBook);
    readonly DeleteBook = this.endpointBuilder(DeleteBook);

    readonly ListSection = this.endpointBuilder(ListSection);
    readonly GetSection = this.endpointBuilder(GetSection);
    readonly GetIntroductionSection = this.endpointBuilder(
        GetIntroductionSection
    );
    readonly FetchSection = this.endpointBuilder(FetchSection);
    readonly LoadSection = this.endpointBuilder(LoadSection);
    readonly UpdateSection = this.endpointBuilder(UpdateSection);
    readonly DeleteSection = this.endpointBuilder(DeleteSection);

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

    readonly ListBookmark = this.endpointBuilder(ListBookmark);
    readonly CreateBookmark = this.endpointBuilder(CreateBookmark);
    readonly DeleteBookmark = this.endpointBuilder(DeleteBookmark);

    readonly GetOrder = this.endpointBuilder(GetOrder);
    readonly ListOrder = this.endpointBuilder(ListOrder);
}
