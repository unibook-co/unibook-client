import { EndpointClient } from "endpoint-client";
import {
    AuthOAuthGoogle,
    CreateBook,
    DeleteBook,
    DeleteSection,
    FetchSection,
    GetBook,
    GetSection,
    GetUser,
    ListBook,
    ListSection,
    ListUser,
    LoadSection,
    SearchUser,
    UpdateBook,
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
    readonly DeleteSection = this.endpointBuilder(DeleteSection);
}
