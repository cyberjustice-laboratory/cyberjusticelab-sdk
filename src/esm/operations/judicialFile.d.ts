    deleteParty(partyId: string, lastModified: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    deleteParty(partyId: string, lastModified: string, callback: msRest.ServiceCallback<void>): void;
    deleteParty(partyId: string, lastModified: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Detach Representative From Party.
     * @param detachRepresentativeFromPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.DetachRepresentativeFromPartyModel}Object
     * that contains a party Id
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    detachRepresentativeFromParty(detachRepresentativeFromPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param detachRepresentativeFromPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.DetachRepresentativeFromPartyModel}Object
     * that contains a party Id
     * @param callback The callback
     */
    detachRepresentativeFromParty(detachRepresentativeFromPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param detachRepresentativeFromPartyModel A
     * {CyberjusticeLab.Kernel.Shared.JudicialFile.Models.DetachRepresentativeFromPartyModel}Object
     * that contains a party Id
     * @param options The optional parameters
     * @param callback The callback
     */
    detachRepresentativeFromParty(detachRepresentativeFromPartyModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsDetachRepresentativeFromPartyModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @deprecated This operation is deprecated. Please do not use it any longer.
    /**
     * @summary Delete a file invitation.
     * @param fileInvitationId File invitation Guid.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteFileInvitation(fileInvitationId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileInvitationId File invitation Guid.
     * @param callback The callback
     */
    deleteFileInvitation(fileInvitationId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileInvitationId File invitation Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteFileInvitation(fileInvitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    deleteFileTagLink(fileId: string, tagCode: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    deleteFileTagLink(fileId: string, tagCode: string, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    deleteFileTagLink(fileId: string, tagCode: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a charge (used for both penal charges and criminal charges).
     * @param chargeId The Guid of the charge to be deleted.
     * @param modifiedTicks The modified date in ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteCharge(chargeId: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param chargeId The Guid of the charge to be deleted.
     * @param modifiedTicks The modified date in ticks.
     * @param callback The callback
     */
    deleteCharge(chargeId: string, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param chargeId The Guid of the charge to be deleted.
     * @param modifiedTicks The modified date in ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteCharge(chargeId: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Get a Judicial File.
     * @param fileId Identification of the requested file..
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileGetFileResponse>
     */
    getFile(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileResponse>;
    /**
     * @param fileId Identification of the requested file..
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFile(fileId: string, callback: msRest.ServiceCallback<number>): void;
    /**
     * @param fileId Identification of the requested file..
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getFile(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<number>): void;
    checkForFileOptimisticConcurrency(fileId: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCheckForFileOptimisticConcurrencyResponse>;
    checkForFileOptimisticConcurrency(fileId: string, modifiedTicks: string, callback: msRest.ServiceCallback<boolean>): void;
    checkForFileOptimisticConcurrency(fileId: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<boolean>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @deprecated This operation is deprecated. Please do not use it any longer.
    getPartyInvitation(partyInvitationId: string, callback: msRest.ServiceCallback<any>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
    getPartyInvitation(partyInvitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    getPartyInvitationsOfParty(partyId: string, callback: msRest.ServiceCallback<any>): void;
    /**
     * @param partyId The party Guid.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
    getPartyInvitationsOfParty(partyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<any>): void;
     * @summary Get the file invitations from a specific party Id.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFileInvitationsOfPartyResponse>
     */
    getFileInvitationsOfParty(partyId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileInvitationsOfPartyResponse>;
    /**
     * @param partyId The party Guid.
     * @param callback The callback
     */
    getFileInvitationsOfParty(partyId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel[]>): void;
    /**
     * @param partyId The party Guid.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileInvitationsOfParty(partyId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationModel[]>): void;
    /**
     * @summary Get the file invitation information.
     * @param code The Invitation Code.
     * @param judicialFileId The JudicialFileId.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFileInvitationInformationResponse>
     */
    getFileInvitationInformation(code: string, judicialFileId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileInvitationInformationResponse>;
    /**
     * @param code The Invitation Code.
     * @param judicialFileId The JudicialFileId.
     * @param callback The callback
     */
    getFileInvitationInformation(code: string, judicialFileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel>): void;
    /**
     * @param code The Invitation Code.
     * @param judicialFileId The JudicialFileId.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileInvitationInformation(code: string, judicialFileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationInformationModel>): void;
    /**
     * @summary Use the invitationId to get some basic information about the file.
     * @param invitationId The party invitation Guid.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetFileInformationFromPartyInvitationResponse>
     */
    getFileInformationFromPartyInvitation(invitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetFileInformationFromPartyInvitationResponse>;
    /**
     * @param invitationId The party invitation Guid.
     * @param callback The callback
     */
    getFileInformationFromPartyInvitation(invitationId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel>): void;
    /**
     * @param invitationId The party invitation Guid.
    getFileInformationFromPartyInvitation(invitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInformationFromPartyInvitationModel>): void;
     * @returns Promise<Models.JudicialFileGetLogEntryDistinctCodesResponse>
    getLogEntryDistinctCodes(fileId: string, currentRole: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetLogEntryDistinctCodesResponse>;
    getLogEntryDistinctCodes(fileId: string, currentRole: string, callback: msRest.ServiceCallback<string[]>): void;
    getLogEntryDistinctCodes(fileId: string, currentRole: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
    updatePartyType(partyId: string, partyType: string, lastModified: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    updatePartyType(partyId: string, partyType: string, lastModified: string, callback: msRest.ServiceCallback<void>): void;
    updatePartyType(partyId: string, partyType: string, lastModified: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    updatePartyDisputeDescription(partyId: string, disputeDescription: string, lastModified: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    updatePartyDisputeDescription(partyId: string, disputeDescription: string, lastModified: string, callback: msRest.ServiceCallback<void>): void;
    updatePartyDisputeDescription(partyId: string, disputeDescription: string, lastModified: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the Expiration date of a file invitation.
     * @param fileInvitationId Identification of the file invitation.
     * @param expiryDate New expiration date of the file invitation.
     * @param lastModified For optimistic concurrency check.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateFileInvitationExpirationDate(fileInvitationId: string, expiryDate: Date | string, lastModified: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileInvitationId Identification of the file invitation.
     * @param expiryDate New expiration date of the file invitation.
     * @param lastModified For optimistic concurrency check.
     * @param callback The callback
     */
    updateFileInvitationExpirationDate(fileInvitationId: string, expiryDate: Date | string, lastModified: Date | string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileInvitationId Identification of the file invitation.
     * @param expiryDate New expiration date of the file invitation.
     * @param lastModified For optimistic concurrency check.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateFileInvitationExpirationDate(fileInvitationId: string, expiryDate: Date | string, lastModified: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the Expiration date of a party invitation.
     * @param partyInvitationId Identification of the party invitation.
     * @param expiryDate New expiration date of the party invitation.
     * @param [options] The optional parameters
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<msRest.RestResponse>
     */
    updatePartyInvitationExpirationDate(partyInvitationId: string, expiryDate: Date | string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param partyInvitationId Identification of the party invitation.
     * @param expiryDate New expiration date of the party invitation.
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    updatePartyInvitationExpirationDate(partyInvitationId: string, expiryDate: Date | string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param partyInvitationId Identification of the party invitation.
     * @param expiryDate New expiration date of the party invitation.
     * @param options The optional parameters
     * @param callback The callback
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    updatePartyInvitationExpirationDate(partyInvitationId: string, expiryDate: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update the status of a file.
     * @param fileId Id of the file.
     * @param fileStatus New judicial file status.
     * @param lastModifiedDate Time stamp of the last modification of the file.  Used for optimistic
     * concurrency check.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateFileStatus(fileId: string, fileStatus: string, lastModifiedDate: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileId Id of the file.
     * @param fileStatus New judicial file status.
     * @param lastModifiedDate Time stamp of the last modification of the file.  Used for optimistic
     * concurrency check.
     * @param callback The callback
     */
    updateFileStatus(fileId: string, fileStatus: string, lastModifiedDate: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileId Id of the file.
     * @param fileStatus New judicial file status.
     * @param lastModifiedDate Time stamp of the last modification of the file.  Used for optimistic
     * concurrency check.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateFileStatus(fileId: string, fileStatus: string, lastModifiedDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileCreatePartyInvitationResponse>
    createPartyInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreatePartyInvitationResponse>;
     * @deprecated This operation is deprecated. Please do not use it any longer.
    createPartyInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel, callback: msRest.ServiceCallback<string>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    createPartyInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsPartyInvitationCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Create an invitation to a file.
     * @param createModel The file invitation create model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateFileInvitationResponse>
     */
    createFileInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateFileInvitationResponse>;
    /**
     * @param createModel The file invitation create model.
     * @param callback The callback
    createFileInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param createModel The file invitation create model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createFileInvitation(createModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileAcceptPartyInvitationResponse>
    acceptPartyInvitation(partyInvitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileAcceptPartyInvitationResponse>;
     * @deprecated This operation is deprecated. Please do not use it any longer.
    acceptPartyInvitation(partyInvitationId: string, callback: msRest.ServiceCallback<string>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
    acceptPartyInvitation(partyInvitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @deprecated This operation is deprecated. Please do not use it any longer.
    /**
     * @summary Refuse a file invitation. Update a tag with a complement.
     * @param refuseModel Data to refuse an invite.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    refuseFileInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param refuseModel Data to refuse an invite.
     * @param callback The callback
     */
    refuseFileInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param refuseModel Data to refuse an invite.
     * @param options The optional parameters
     * @param callback The callback
     */
    refuseFileInvitation(refuseModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationRefuseModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
     * @returns Promise<Models.JudicialFileCreateFileTagLinkResponse>
    createFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateFileTagLinkResponse>;
    createFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel, callback: msRest.ServiceCallback<string>): void;
    createFileTagLink(tagModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsJudicialFileTagCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     * @returns Promise<Models.JudicialFileAcceptRepresentativeInvitationResponse>
    acceptRepresentativeInvitation(invitationId: string, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileAcceptRepresentativeInvitationResponse>;
     * @deprecated This operation is deprecated. Please do not use it any longer.
    acceptRepresentativeInvitation(invitationId: string, callback: msRest.ServiceCallback<string>): void;
     * @deprecated This operation is deprecated. Please do not use it any longer.
     */
    acceptRepresentativeInvitation(invitationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Accept an invitation to a file.
     * @param acceptModel The accept invitaton Model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileAcceptFileInvitationResponse>
     */
    acceptFileInvitation(acceptModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileAcceptFileInvitationResponse>;
    /**
     * @param acceptModel The accept invitaton Model.
     * @param callback The callback
    acceptFileInvitation(acceptModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param acceptModel The accept invitaton Model.
     * @param options The optional parameters
     * @param callback The callback
     */
    acceptFileInvitation(acceptModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsFileInvitationAcceptModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Notifications count by file for the current user.
     * @param requestModel Notification by file filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileGetNotificationsSummaryByFileResponse>
     */
    getNotificationsSummaryByFile(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetNotificationsSummaryByFileResponse>;
    /**
     * @param requestModel Notification by file filter model.
     * @param callback The callback
     */
    getNotificationsSummaryByFile(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData>): void;
    /**
     * @param requestModel Notification by file filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getNotificationsSummaryByFile(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsNotificationsSummaryByFileApiResponseData>): void;
     * @returns Promise<Models.JudicialFileGetLogEntriesResponse>
    getLogEntries(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileGetLogEntriesResponse>;
    getLogEntries(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData>): void;
    getLogEntries(requestModel: Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedJudicialFileModelsLogEntryApiResponseData>): void;
    /**
     * @summary Create a penal charge.
     * @param charge The penal charge create model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileCreateChargeResponse>
     */
    createCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileCreateChargeResponse>;
    /**
     * @param charge The penal charge create model.
     * @param callback The callback
     */
    createCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param charge The penal charge create model.
     * @param options The optional parameters
     * @param callback The callback
     */
    createCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeCreateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;
    /**
     * @summary Creates a representative profile
     * @param model The create representative profile model
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createRepresentativeProfile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param model The create representative profile model
     * @param callback The callback
     */
    createRepresentativeProfile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param model The create representative profile model
     * @param options The optional parameters
     * @param callback The callback
     */
    createRepresentativeProfile(model: Models.CyberjusticeLabKernelSharedJudicialFileModelsCreateRepresentativeProfileModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    changePartyStatus(partyId: string, status: string, lastModifiedDate: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    changePartyStatus(partyId: string, status: string, lastModifiedDate: string, callback: msRest.ServiceCallback<void>): void;
    changePartyStatus(partyId: string, status: string, lastModifiedDate: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a penal charge.
     * @param charge The penal charge update model.
     * @param [options] The optional parameters
     * @returns Promise<Models.JudicialFileUpdateChargeResponse>
     */
    updateCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel, options?: msRest.RequestOptionsBase): Promise<Models.JudicialFileUpdateChargeResponse>;
    /**
     * @param charge The penal charge update model.
     * @param callback The callback
     */
    updateCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel, callback: msRest.ServiceCallback<string>): void;
    /**
     * @param charge The penal charge update model.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateCharge(charge: Models.CyberjusticeLabKernelSharedJudicialFileModelsPenalChargeUpdateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string>): void;