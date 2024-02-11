import { EndpointClient } from "endpoint-client";
import {
    ApproveUserOrder,
    AuthOAuthGoogle,
    CancelUserOrder,
    CreateBook,
    CreateBookmark,
    CreateUserOrder,
    DeleteBook,
    DeleteBookmark,
    DeleteSection,
    FetchSection,
    GetAdminBook,
    GetBook,
    GetIntroductionSection,
    GetOrder,
    GetSection,
    GetUser,
    ListBook,
    ListBookmark,
    ListOrder,
    ListSection,
    ListUser,
    ListUserBook,
    LoadSection,
    SearchBook,
    SearchUser,
    UpdateBook,
    UpdateSection,
    UpdateUser,
} from "./endpoint";

export class ProjectBookClient extends EndpointClient {
    readonly ListUser = this.endpointBuilder(ListUser);
    readonly GetUser = this.endpointBuilder(GetUser);
    readonly SearchUser = this.endpointBuilder(SearchUser);
    readonly UpdateUser = this.endpointBuilder(UpdateUser);

    readonly CreateUserOrder = this.endpointBuilder(CreateUserOrder);
    readonly ApproveUserOrder = this.endpointBuilder(ApproveUserOrder);
    readonly CancelUserOrder = this.endpointBuilder(CancelUserOrder);

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

    readonly ListBookmark = this.endpointBuilder(ListBookmark);
    readonly CreateBookmark = this.endpointBuilder(CreateBookmark);
    readonly DeleteBookmark = this.endpointBuilder(DeleteBookmark);

    readonly GetOrder = this.endpointBuilder(GetOrder);
    readonly ListOrder = this.endpointBuilder(ListOrder);
}
