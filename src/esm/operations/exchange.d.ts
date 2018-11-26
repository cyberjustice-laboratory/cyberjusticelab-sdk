import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Exchange. */
export declare class Exchange {
    private readonly client;
    /**
     * Create a Exchange.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Returns the list of all forum messages.
     * @param fileId The file of the messages.
     * @param [options] The optional parameters
     * @returns Promise<Models.ExchangeGetForumMessagesResponse>
     */
    getForumMessages(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.ExchangeGetForumMessagesResponse>;
    /**
     * @param fileId The file of the messages.
     * @param callback The callback
     */
    getForumMessages(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsExchangeForumData[]>): void;
    /**
     * @param fileId The file of the messages.
     * @param options The optional parameters
     * @param callback The callback
     */
    getForumMessages(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsExchangeForumData[]>): void;
    /**
     * @summary Get the list of forum messages.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.ExchangeGetForumMessages1Response>
     */
    getForumMessages1(requestModel: Models.CyberjusticeLabKernelSharedExchangeModelsForumMessageApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.ExchangeGetForumMessages1Response>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getForumMessages1(requestModel: Models.CyberjusticeLabKernelSharedExchangeModelsForumMessageApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedExchangeModelsForumMessageApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getForumMessages1(requestModel: Models.CyberjusticeLabKernelSharedExchangeModelsForumMessageApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedExchangeModelsForumMessageApiResponseData>): void;
    /**
     * @summary Return a forum message.
     * @param fileId The message's file Guid.
     * @param forumId The requested message Guid.
     * @param [options] The optional parameters
     * @returns Promise<Models.ExchangeGetForumMessageResponse>
     */
    getForumMessage(fileId: string, forumId: string, options?: msRest.RequestOptionsBase): Promise<Models.ExchangeGetForumMessageResponse>;
    /**
     * @param fileId The message's file Guid.
     * @param forumId The requested message Guid.
     * @param callback The callback
     */
    getForumMessage(fileId: string, forumId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsExchangeForumData>): void;
    /**
     * @param fileId The message's file Guid.
     * @param forumId The requested message Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    getForumMessage(fileId: string, forumId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsExchangeForumData>): void;
    /**
     * @summary Add a new forum message
     * @param forumMessageModel A {CyberjusticeLab.Kernel.Shared.Exchange.Models.AddForumMessageModel}
     * object with the new message information.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    addForumMessage(forumMessageModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddForumMessageModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param forumMessageModel A {CyberjusticeLab.Kernel.Shared.Exchange.Models.AddForumMessageModel}
     * object with the new message information.
     * @param callback The callback
     */
    addForumMessage(forumMessageModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddForumMessageModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param forumMessageModel A {CyberjusticeLab.Kernel.Shared.Exchange.Models.AddForumMessageModel}
     * object with the new message information.
     * @param options The optional parameters
     * @param callback The callback
     */
    addForumMessage(forumMessageModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddForumMessageModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Add a party to a forum's message
     * @param partyForumMessageModel The party, file id and the attribute filter.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    addPartyToForumMessages(partyForumMessageModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddPartyToForumMessagesModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyForumMessageModel The party, file id and the attribute filter.
     * @param callback The callback
     */
    addPartyToForumMessages(partyForumMessageModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddPartyToForumMessagesModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyForumMessageModel The party, file id and the attribute filter.
     * @param options The optional parameters
     * @param callback The callback
     */
    addPartyToForumMessages(partyForumMessageModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddPartyToForumMessagesModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Add new forum messages attributes.
     * @param forumMessageAttributesModel Forum Message view model
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    addForumMessageAttributes(forumMessageAttributesModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddForumMessageAttributesModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param forumMessageAttributesModel Forum Message view model
     * @param callback The callback
     */
    addForumMessageAttributes(forumMessageAttributesModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddForumMessageAttributesModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param forumMessageAttributesModel Forum Message view model
     * @param options The optional parameters
     * @param callback The callback
     */
    addForumMessageAttributes(forumMessageAttributesModel: Models.CyberjusticeLabKernelSharedExchangeModelsAddForumMessageAttributesModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
}
//# sourceMappingURL=exchange.d.ts.map