import { EndpointClient } from "endpoint-client";
import {
    AuthOAuthGoogle,
    CreateBook,
    CreateBookmark,
    DeleteBook,
    DeleteBookmark,
    DeleteSection,
    FetchSection,
    GetBook,
    GetSection,
    GetUser,
    ListBook,
    ListBookmark,
    ListSection,
    ListUser,
    LoadSection,
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

    readonly AuthOAuthGoogle = this.endpointBuilder(AuthOAuthGoogle);

    readonly ListBook = this.endpointBuilder(ListBook);
    readonly GetBook = this.endpointBuilder(GetBook);
    readonly CreateBook = this.endpointBuilder(CreateBook);
    readonly UpdateBook = this.endpointBuilder(UpdateBook);
    readonly DeleteBook = this.endpointBuilder(DeleteBook);

    readonly ListSection = this.endpointBuilder(ListSection);
    readonly GetSection = this.endpointBuilder(GetSection);
    readonly FetchSection = this.endpointBuilder(FetchSection);
    readonly LoadSection = this.endpointBuilder(LoadSection);
    readonly UpdateSection = this.endpointBuilder(UpdateSection);
    readonly DeleteSection = this.endpointBuilder(DeleteSection);

    readonly ListBookmark = this.endpointBuilder(ListBookmark);
    readonly CreateBookmark = this.endpointBuilder(CreateBookmark);
    readonly DeleteBookmark = this.endpointBuilder(DeleteBookmark);
}
