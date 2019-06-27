import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import { CyberjusticeAPIsContext } from "../cyberjusticeAPIsContext";
/** Class representing a Calendar. */
export declare class Calendar {
    private readonly client;
    /**
     * Create a Calendar.
     * @param {CyberjusticeAPIsContext} client Reference to the service client.
     */
    constructor(client: CyberjusticeAPIsContext);
    /**
     * @summary Update a base calendar status.
     * @param baseCalendarId Id of the base calendar.
     * @param status New status of the calendar.
     * @param modifiedTicks The modified date ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateBaseCalendarStatus(baseCalendarId: string, status: string, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseCalendarId Id of the base calendar.
     * @param status New status of the calendar.
     * @param modifiedTicks The modified date ticks.
     * @param callback The callback
     */
    updateBaseCalendarStatus(baseCalendarId: string, status: string, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseCalendarId Id of the base calendar.
     * @param status New status of the calendar.
     * @param modifiedTicks The modified date ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateBaseCalendarStatus(baseCalendarId: string, status: string, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update an assignment cycle status.
     * @param cycleId Id of the assignment cycle.
     * @param status New status of the cycle. Possible values include: 'Draft', 'Active'
     * @param modifiedTicks The modified date ticks.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateAssignmentCycleStatus(cycleId: string, status: Models.Status11, modifiedTicks: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param cycleId Id of the assignment cycle.
     * @param status New status of the cycle. Possible values include: 'Draft', 'Active'
     * @param modifiedTicks The modified date ticks.
     * @param callback The callback
     */
    updateAssignmentCycleStatus(cycleId: string, status: Models.Status11, modifiedTicks: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param cycleId Id of the assignment cycle.
     * @param status New status of the cycle. Possible values include: 'Draft', 'Active'
     * @param modifiedTicks The modified date ticks.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateAssignmentCycleStatus(cycleId: string, status: Models.Status11, modifiedTicks: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a period availability role link status.
     * @param linkId Id of the period availability role link.
     * @param status New status of the role link.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePeriodAvailabilityRoleLinkStatus(linkId: string, status: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param linkId Id of the period availability role link.
     * @param status New status of the role link.
     * @param callback The callback
     */
    updatePeriodAvailabilityRoleLinkStatus(linkId: string, status: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param linkId Id of the period availability role link.
     * @param status New status of the role link.
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePeriodAvailabilityRoleLinkStatus(linkId: string, status: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update base calendar.
     * @param baseCalendarData A
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarUpdateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateBaseCalendar(baseCalendarData: Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseCalendarData A
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarUpdateData} object.
     * @param callback The callback
     */
    updateBaseCalendar(baseCalendarData: Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseCalendarData A
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarUpdateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateBaseCalendar(baseCalendarData: Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Attach locationRooms to the calendar.
     * @param locationRoomIds The room ids.
     * @param calendarId The calendar id.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateBaseCalendarRoomLocationLink(locationRoomIds: string[], calendarId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param locationRoomIds The room ids.
     * @param calendarId The calendar id.
     * @param callback The callback
     */
    updateBaseCalendarRoomLocationLink(locationRoomIds: string[], calendarId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param locationRoomIds The room ids.
     * @param calendarId The calendar id.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateBaseCalendarRoomLocationLink(locationRoomIds: string[], calendarId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a period availability.
     * @param period {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityUpdateData}
     * object to be updated.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePeriodAvailability(period: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param period {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityUpdateData}
     * object to be updated.
     * @param callback The callback
     */
    updatePeriodAvailability(period: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param period {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityUpdateData}
     * object to be updated.
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePeriodAvailability(period: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a closed day.
     * @param closedDay {CyberjusticeLab.Kernel.ServiceContracts.Calendar.ClosedDayUpdateData} object
     * to be updated.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateClosedDay(closedDay: Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param closedDay {CyberjusticeLab.Kernel.ServiceContracts.Calendar.ClosedDayUpdateData} object
     * to be updated.
     * @param callback The callback
     */
    updateClosedDay(closedDay: Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param closedDay {CyberjusticeLab.Kernel.ServiceContracts.Calendar.ClosedDayUpdateData} object
     * to be updated.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateClosedDay(closedDay: Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Attach judicial entity to the calendar.
     * @param judicialEntityId The judicial entity id.
     * @param calendarId The calendar id.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateBaseCalendarJudicialEntityLink(judicialEntityId: string, calendarId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param judicialEntityId The judicial entity id.
     * @param calendarId The calendar id.
     * @param callback The callback
     */
    updateBaseCalendarJudicialEntityLink(judicialEntityId: string, calendarId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param judicialEntityId The judicial entity id.
     * @param calendarId The calendar id.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateBaseCalendarJudicialEntityLink(judicialEntityId: string, calendarId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update an assignment cycle.
     * @param cycle {CyberjusticeLab.Kernel.ServiceContracts.Calendar.AssignmentCycleUpdateData} object
     * to be updated.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateAssignmentCycle(cycle: Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param cycle {CyberjusticeLab.Kernel.ServiceContracts.Calendar.AssignmentCycleUpdateData} object
     * to be updated.
     * @param callback The callback
     */
    updateAssignmentCycle(cycle: Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param cycle {CyberjusticeLab.Kernel.ServiceContracts.Calendar.AssignmentCycleUpdateData} object
     * to be updated.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateAssignmentCycle(cycle: Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a period availability group. Every data object must have the same base calendar
     * Id and group Id.
     * @param periodAvailabilities A list of
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityUpdateData} objects to be
     * updated.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePeriodAvailabilityGroup(periodAvailabilities: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param periodAvailabilities A list of
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityUpdateData} objects to be
     * updated.
     * @param callback The callback
     */
    updatePeriodAvailabilityGroup(periodAvailabilities: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param periodAvailabilities A list of
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityUpdateData} objects to be
     * updated.
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePeriodAvailabilityGroup(periodAvailabilities: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityUpdateData[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a schedule pattern.
     * @param schedulePattern The updated pattern data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateSchedulePattern(schedulePattern: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param schedulePattern The updated pattern data.
     * @param callback The callback
     */
    updateSchedulePattern(schedulePattern: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param schedulePattern The updated pattern data.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateSchedulePattern(schedulePattern: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a schedule entry.
     * @param scheduleEntry The updated entry data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateScheduleEntry(scheduleEntry: Models.CyberjusticeLabKernelServiceContractsCalendarScheduleEntryUpdateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param scheduleEntry The updated entry data.
     * @param callback The callback
     */
    updateScheduleEntry(scheduleEntry: Models.CyberjusticeLabKernelServiceContractsCalendarScheduleEntryUpdateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param scheduleEntry The updated entry data.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateScheduleEntry(scheduleEntry: Models.CyberjusticeLabKernelServiceContractsCalendarScheduleEntryUpdateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Update a link data between a period availability and a judicial file.
     * @param fileLink The linked object data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updatePeriodAvailabilityJudicialFileLink(fileLink: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileLink The linked object data.
     * @param callback The callback
     */
    updatePeriodAvailabilityJudicialFileLink(fileLink: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileLink The linked object data.
     * @param options The optional parameters
     * @param callback The callback
     */
    updatePeriodAvailabilityJudicialFileLink(fileLink: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates an event.
     * @param eventModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventModel} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateEvent(eventModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventModel} object.
     * @param callback The callback
     */
    updateEvent(eventModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventModel} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateEvent(eventModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates event's attributes.
     * @param eventAttributesModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventAttributesModel} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateEventAttributes(eventAttributesModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventAttributesModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventAttributesModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventAttributesModel} object.
     * @param callback The callback
     */
    updateEventAttributes(eventAttributesModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventAttributesModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventAttributesModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventAttributesModel} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateEventAttributes(eventAttributesModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventAttributesModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates event's behaviours.
     * @param eventBehavioursModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventBehavioursModel} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateEventBehaviours(eventBehavioursModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehavioursModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventBehavioursModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventBehavioursModel} object.
     * @param callback The callback
     */
    updateEventBehaviours(eventBehavioursModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehavioursModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventBehavioursModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventBehavioursModel} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateEventBehaviours(eventBehavioursModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventBehavioursModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates event's rank.
     * @param eventRankModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventRankModel}
     * object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateEventRank(eventRankModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventRankModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventRankModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventRankModel}
     * object.
     * @param callback The callback
     */
    updateEventRank(eventRankModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventRankModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventRankModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventRankModel}
     * object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateEventRank(eventRankModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventRankModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Updates event's startdate.
     * @param eventStartDateModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventStartDateModel} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    updateEventStartDate(eventStartDateModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventStartDateModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventStartDateModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventStartDateModel} object.
     * @param callback The callback
     */
    updateEventStartDate(eventStartDateModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventStartDateModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventStartDateModel A
     * {CyberjusticeLab.Kernel.Shared.Calendar.Models.UpdateEventStartDateModel} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    updateEventStartDate(eventStartDateModel: Models.CyberjusticeLabKernelSharedCalendarModelsUpdateEventStartDateModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Remove a closed day.
     * @param id Id of the closed day to remove.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteClosedDay(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param id Id of the closed day to remove.
     * @param callback The callback
     */
    deleteClosedDay(id: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id Id of the closed day to remove.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteClosedDay(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Remove a closed weekday from a calendar.
     * @param baseCalendarId The closed weekday's base calendar Id.
     * @param weekday Closed weekday to remove.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteClosedWeekday(baseCalendarId: string, weekday: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseCalendarId The closed weekday's base calendar Id.
     * @param weekday Closed weekday to remove.
     * @param callback The callback
     */
    deleteClosedWeekday(baseCalendarId: string, weekday: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseCalendarId The closed weekday's base calendar Id.
     * @param weekday Closed weekday to remove.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteClosedWeekday(baseCalendarId: string, weekday: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Remove a period availability.
     * @param id The period availability Id.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deletePeriodAvailability(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param id The period availability Id.
     * @param callback The callback
     */
    deletePeriodAvailability(id: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id The period availability Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    deletePeriodAvailability(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete multiple period availabilities.
     * @param periodAvailabilityIds Ids of the period availabilities.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deletePeriodAvailabilities(periodAvailabilityIds: string[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param periodAvailabilityIds Ids of the period availabilities.
     * @param callback The callback
     */
    deletePeriodAvailabilities(periodAvailabilityIds: string[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param periodAvailabilityIds Ids of the period availabilities.
     * @param options The optional parameters
     * @param callback The callback
     */
    deletePeriodAvailabilities(periodAvailabilityIds: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Remove a period availability group.
     * @param periodAvailabilityGroupId The period availability group Id.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deletePeriodAvailabilityGroup(periodAvailabilityGroupId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param periodAvailabilityGroupId The period availability group Id.
     * @param callback The callback
     */
    deletePeriodAvailabilityGroup(periodAvailabilityGroupId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param periodAvailabilityGroupId The period availability group Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    deletePeriodAvailabilityGroup(periodAvailabilityGroupId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a link with a role between a period availability and a user.
     * @param id Id of the role link.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deletePeriodAvailabilityRoleLink(id: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param id Id of the role link.
     * @param callback The callback
     */
    deletePeriodAvailabilityRoleLink(id: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param id Id of the role link.
     * @param options The optional parameters
     * @param callback The callback
     */
    deletePeriodAvailabilityRoleLink(id: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete a period availability judicial file link.
     * @param periodAvailabilityId Id of the period availability.
     * @param judicialFileId Id of the judicial file.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deletePeriodAvailabilityJudicialFileLink(periodAvailabilityId: string, judicialFileId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param periodAvailabilityId Id of the period availability.
     * @param judicialFileId Id of the judicial file.
     * @param callback The callback
     */
    deletePeriodAvailabilityJudicialFileLink(periodAvailabilityId: string, judicialFileId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param periodAvailabilityId Id of the period availability.
     * @param judicialFileId Id of the judicial file.
     * @param options The optional parameters
     * @param callback The callback
     */
    deletePeriodAvailabilityJudicialFileLink(periodAvailabilityId: string, judicialFileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Remove the link between a room and a base calendar.
     * @param baseCalendarId The base calendar Id.
     * @param locationRoomId The location room Id.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteBaseCalendarLocationRoomLink(baseCalendarId: string, locationRoomId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseCalendarId The base calendar Id.
     * @param locationRoomId The location room Id.
     * @param callback The callback
     */
    deleteBaseCalendarLocationRoomLink(baseCalendarId: string, locationRoomId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseCalendarId The base calendar Id.
     * @param locationRoomId The location room Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteBaseCalendarLocationRoomLink(baseCalendarId: string, locationRoomId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete an assignment cycle.
     * @param cycleId Id of the cycle.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteAssignmentCycle(cycleId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param cycleId Id of the cycle.
     * @param callback The callback
     */
    deleteAssignmentCycle(cycleId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param cycleId Id of the cycle.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteAssignmentCycle(cycleId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Remove a schedule pattern.
     * @param schedulePatternId The Id of the pattern to remove.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteSchedulePattern(schedulePatternId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param schedulePatternId The Id of the pattern to remove.
     * @param callback The callback
     */
    deleteSchedulePattern(schedulePatternId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param schedulePatternId The Id of the pattern to remove.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteSchedulePattern(schedulePatternId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Remove a schedule entry.
     * @param scheduleEntryId The Id of the entry to remove.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteScheduleEntry(scheduleEntryId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param scheduleEntryId The Id of the entry to remove.
     * @param callback The callback
     */
    deleteScheduleEntry(scheduleEntryId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param scheduleEntryId The Id of the entry to remove.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteScheduleEntry(scheduleEntryId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete multiple assignment cycles.
     * @param cycleIds The list of assignment cycles Ids.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteAssignmentCycles(cycleIds: string[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param cycleIds The list of assignment cycles Ids.
     * @param callback The callback
     */
    deleteAssignmentCycles(cycleIds: string[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param cycleIds The list of assignment cycles Ids.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteAssignmentCycles(cycleIds: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete multiple period availability role links.
     * @param periodAvailabilityRoleLinkIds The list of period availability role link Ids.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deletePeriodAvailabilityRoleLinks(periodAvailabilityRoleLinkIds: string[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param periodAvailabilityRoleLinkIds The list of period availability role link Ids.
     * @param callback The callback
     */
    deletePeriodAvailabilityRoleLinks(periodAvailabilityRoleLinkIds: string[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param periodAvailabilityRoleLinkIds The list of period availability role link Ids.
     * @param options The optional parameters
     * @param callback The callback
     */
    deletePeriodAvailabilityRoleLinks(periodAvailabilityRoleLinkIds: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete multiple closed days.
     * @param closedDayIds The list of closed day Ids.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteClosedDays(closedDayIds: string[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param closedDayIds The list of closed day Ids.
     * @param callback The callback
     */
    deleteClosedDays(closedDayIds: string[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param closedDayIds The list of closed day Ids.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteClosedDays(closedDayIds: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete an event
     * @param eventId ID of the calendar event to delete.
     * @param fileId ID of the related file.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteEvent(eventId: string, fileId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventId ID of the calendar event to delete.
     * @param fileId ID of the related file.
     * @param callback The callback
     */
    deleteEvent(eventId: string, fileId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventId ID of the calendar event to delete.
     * @param fileId ID of the related file.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteEvent(eventId: string, fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete all events from a calendar.
     * @param calendarId ID of the target calendar.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteAllEvents(calendarId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param calendarId ID of the target calendar.
     * @param callback The callback
     */
    deleteAllEvents(calendarId: string, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param calendarId ID of the target calendar.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteAllEvents(calendarId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Delete behaviors.
     * @param eventId ID of the target event.
     * @param fileId ID of the related file.
     * @param behaviors The behaviors to delete.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    deleteBehaviors(eventId: string, fileId: string, behaviors: number[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventId ID of the target event.
     * @param fileId ID of the related file.
     * @param behaviors The behaviors to delete.
     * @param callback The callback
     */
    deleteBehaviors(eventId: string, fileId: string, behaviors: number[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventId ID of the target event.
     * @param fileId ID of the related file.
     * @param behaviors The behaviors to delete.
     * @param options The optional parameters
     * @param callback The callback
     */
    deleteBehaviors(eventId: string, fileId: string, behaviors: number[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Get the list of events.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetEventsResponse>
     */
    getEvents(requestModel: Models.CyberjusticeLabKernelSharedCalendarModelsEventApiResquestData, options?: msRest.RequestOptionsBase): Promise<Models.CalendarGetEventsResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getEvents(requestModel: Models.CyberjusticeLabKernelSharedCalendarModelsEventApiResquestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedCalendarModelsEventApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getEvents(requestModel: Models.CyberjusticeLabKernelSharedCalendarModelsEventApiResquestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedCalendarModelsEventApiResponseData>): void;
    /**
     * @summary Get a list of days within a specified range.
     * @param requestModel Request filter model.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetFullCalendarResponse>
     */
    getFullCalendar(requestModel: Models.CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiRequestData, options?: msRest.RequestOptionsBase): Promise<Models.CalendarGetFullCalendarResponse>;
    /**
     * @param requestModel Request filter model.
     * @param callback The callback
     */
    getFullCalendar(requestModel: Models.CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiRequestData, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiResponseData>): void;
    /**
     * @param requestModel Request filter model.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFullCalendar(requestModel: Models.CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedCalendarModelsFullCalendarApiResponseData>): void;
    /**
     * @summary Create a base calendar.
     * @param baseCalendarData A
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarCreateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createBaseCalendar(baseCalendarData: Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param baseCalendarData A
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarCreateData} object.
     * @param callback The callback
     */
    createBaseCalendar(baseCalendarData: Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param baseCalendarData A
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.BaseCalendarCreateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createBaseCalendar(baseCalendarData: Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Creates a period availability for a calendar.
     * @param period A {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityCreateData}
     * Object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createPeriodAvailability(period: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param period A {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityCreateData}
     * Object.
     * @param callback The callback
     */
    createPeriodAvailability(period: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param period A {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityCreateData}
     * Object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createPeriodAvailability(period: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Creates a period availability group. Every data object must have the same base calendar
     * Id.
     * @param periodAvailabilities A list of
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityCreateData} objects.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createPeriodAvailabilityGroup(periodAvailabilities: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param periodAvailabilities A list of
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityCreateData} objects.
     * @param callback The callback
     */
    createPeriodAvailabilityGroup(periodAvailabilities: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData[], callback: msRest.ServiceCallback<void>): void;
    /**
     * @param periodAvailabilities A list of
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityCreateData} objects.
     * @param options The optional parameters
     * @param callback The callback
     */
    createPeriodAvailabilityGroup(periodAvailabilities: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityCreateData[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Add closed weekday into a base calendar.
     * @param day ClosedWeekdayData object to be added.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    baseCalendarAddClosedWeekday(day: Models.CyberjusticeLabKernelServiceContractsCalendarClosedWeekdayData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param day ClosedWeekdayData object to be added.
     * @param callback The callback
     */
    baseCalendarAddClosedWeekday(day: Models.CyberjusticeLabKernelServiceContractsCalendarClosedWeekdayData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param day ClosedWeekdayData object to be added.
     * @param options The optional parameters
     * @param callback The callback
     */
    baseCalendarAddClosedWeekday(day: Models.CyberjusticeLabKernelServiceContractsCalendarClosedWeekdayData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a closed day.
     * @param day A {CyberjusticeLab.Kernel.ServiceContracts.Calendar.ClosedDayCreateData} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createClosedDay(day: Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param day A {CyberjusticeLab.Kernel.ServiceContracts.Calendar.ClosedDayCreateData} object.
     * @param callback The callback
     */
    createClosedDay(day: Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param day A {CyberjusticeLab.Kernel.ServiceContracts.Calendar.ClosedDayCreateData} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createClosedDay(day: Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a new assignment cycle.
     * @param cycleData AssignmentCycleCreateData object to be added.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createAssignmentCycle(cycleData: Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param cycleData AssignmentCycleCreateData object to be added.
     * @param callback The callback
     */
    createAssignmentCycle(cycleData: Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param cycleData AssignmentCycleCreateData object to be added.
     * @param options The optional parameters
     * @param callback The callback
     */
    createAssignmentCycle(cycleData: Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a link between a human resource with a role and a period availability.
     * @param roleData
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityRoleCreateData} Object that
     * hold data to be added.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createPeriodAvailabilityRoleLink(roleData: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param roleData
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityRoleCreateData} Object that
     * hold data to be added.
     * @param callback The callback
     */
    createPeriodAvailabilityRoleLink(roleData: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param roleData
     * {CyberjusticeLab.Kernel.ServiceContracts.Calendar.PeriodAvailabilityRoleCreateData} Object that
     * hold data to be added.
     * @param options The optional parameters
     * @param callback The callback
     */
    createPeriodAvailabilityRoleLink(roleData: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityRoleCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a link between a period availability and a judicial file.
     * @param fileLink The linked object data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createPeriodAvailabilityJudicialFileLink(fileLink: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param fileLink The linked object data.
     * @param callback The callback
     */
    createPeriodAvailabilityJudicialFileLink(fileLink: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param fileLink The linked object data.
     * @param options The optional parameters
     * @param callback The callback
     */
    createPeriodAvailabilityJudicialFileLink(fileLink: Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityJudicialFileData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Apply a schedule pattern to a base calendar. This creates multiple period
     * availabilities.
     * @param request The schedule pattern copy request data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createPeriodAvailabilitiesFromPattern(request: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCopyRequestData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param request The schedule pattern copy request data.
     * @param callback The callback
     */
    createPeriodAvailabilitiesFromPattern(request: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCopyRequestData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param request The schedule pattern copy request data.
     * @param options The optional parameters
     * @param callback The callback
     */
    createPeriodAvailabilitiesFromPattern(request: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCopyRequestData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a new schedule pattern.
     * @param schedulePattern The new pattern data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createSchedulePattern(schedulePattern: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param schedulePattern The new pattern data.
     * @param callback The callback
     */
    createSchedulePattern(schedulePattern: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param schedulePattern The new pattern data.
     * @param options The optional parameters
     * @param callback The callback
     */
    createSchedulePattern(schedulePattern: Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Create a schedule entry.
     * @param scheduleEntry The new entry data.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createScheduleEntry(scheduleEntry: Models.CyberjusticeLabKernelServiceContractsCalendarScheduleEntryCreateData, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param scheduleEntry The new entry data.
     * @param callback The callback
     */
    createScheduleEntry(scheduleEntry: Models.CyberjusticeLabKernelServiceContractsCalendarScheduleEntryCreateData, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param scheduleEntry The new entry data.
     * @param options The optional parameters
     * @param callback The callback
     */
    createScheduleEntry(scheduleEntry: Models.CyberjusticeLabKernelServiceContractsCalendarScheduleEntryCreateData, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Creates a new calendar.
     * @param calendarModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.CreateCalendarModel}
     * object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createCalendar(calendarModel: Models.CyberjusticeLabKernelSharedCalendarModelsCreateCalendarModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param calendarModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.CreateCalendarModel}
     * object.
     * @param callback The callback
     */
    createCalendar(calendarModel: Models.CyberjusticeLabKernelSharedCalendarModelsCreateCalendarModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param calendarModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.CreateCalendarModel}
     * object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createCalendar(calendarModel: Models.CyberjusticeLabKernelSharedCalendarModelsCreateCalendarModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Creates a new event.
     * @param eventModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.CreateEventModel} object.
     * @param [options] The optional parameters
     * @returns Promise<msRest.RestResponse>
     */
    createEvent(eventModel: Models.CyberjusticeLabKernelSharedCalendarModelsCreateEventModel, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
    /**
     * @param eventModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.CreateEventModel} object.
     * @param callback The callback
     */
    createEvent(eventModel: Models.CyberjusticeLabKernelSharedCalendarModelsCreateEventModel, callback: msRest.ServiceCallback<void>): void;
    /**
     * @param eventModel A {CyberjusticeLab.Kernel.Shared.Calendar.Models.CreateEventModel} object.
     * @param options The optional parameters
     * @param callback The callback
     */
    createEvent(eventModel: Models.CyberjusticeLabKernelSharedCalendarModelsCreateEventModel, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
    /**
     * @summary Get all base calendars.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetBaseCalendarsResponse>
     */
    getBaseCalendars(options?: Models.CalendarGetBaseCalendarsOptionalParams): Promise<Models.CalendarGetBaseCalendarsResponse>;
    /**
     * @param callback The callback
     */
    getBaseCalendars(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getBaseCalendars(options: Models.CalendarGetBaseCalendarsOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarBaseCalendarData[]>): void;
    /**
     * @summary Get all PeriodAvailabilityData.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetPeriodAvailabilitiesResponse>
     */
    getPeriodAvailabilities(options?: Models.CalendarGetPeriodAvailabilitiesOptionalParams): Promise<Models.CalendarGetPeriodAvailabilitiesResponse>;
    /**
     * @param callback The callback
     */
    getPeriodAvailabilities(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getPeriodAvailabilities(options: Models.CalendarGetPeriodAvailabilitiesOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[]>): void;
    /**
     * @summary Get all PeriodAvailabilityData of a user.
     * @param realm Realm of the user.
     * @param userId Identifier of the user.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetPeriodAvailabilitiesOfUserResponse>
     */
    getPeriodAvailabilitiesOfUser(realm: string, userId: string, options?: msRest.RequestOptionsBase): Promise<Models.CalendarGetPeriodAvailabilitiesOfUserResponse>;
    /**
     * @param realm Realm of the user.
     * @param userId Identifier of the user.
     * @param callback The callback
     */
    getPeriodAvailabilitiesOfUser(realm: string, userId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[]>): void;
    /**
     * @param realm Realm of the user.
     * @param userId Identifier of the user.
     * @param options The optional parameters
     * @param callback The callback
     */
    getPeriodAvailabilitiesOfUser(realm: string, userId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarPeriodAvailabilityData[]>): void;
    /**
     * @summary Get all closed days.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetClosedDaysResponse>
     */
    getClosedDays(options?: Models.CalendarGetClosedDaysOptionalParams): Promise<Models.CalendarGetClosedDaysResponse>;
    /**
     * @param callback The callback
     */
    getClosedDays(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getClosedDays(options: Models.CalendarGetClosedDaysOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarClosedDayData[]>): void;
    /**
     * @summary Get all available assignment cycles for the current user.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetAssignmentCyclesResponse>
     */
    getAssignmentCycles(options?: Models.CalendarGetAssignmentCyclesOptionalParams): Promise<Models.CalendarGetAssignmentCyclesResponse>;
    /**
     * @param callback The callback
     */
    getAssignmentCycles(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getAssignmentCycles(options: Models.CalendarGetAssignmentCyclesOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarAssignmentCycleData[]>): void;
    /**
     * @summary Get all available schedule patterns.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetSchedulePatternsResponse>
     */
    getSchedulePatterns(options?: Models.CalendarGetSchedulePatternsOptionalParams): Promise<Models.CalendarGetSchedulePatternsResponse>;
    /**
     * @param callback The callback
     */
    getSchedulePatterns(callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData[]>): void;
    /**
     * @param options The optional parameters
     * @param callback The callback
     */
    getSchedulePatterns(options: Models.CalendarGetSchedulePatternsOptionalParams, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData[]>): void;
    /**
     * @summary Get a schedule entry.
     * @param entryId The schedule entry Id.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetScheduleEntryResponse>
     */
    getScheduleEntry(entryId: string, options?: msRest.RequestOptionsBase): Promise<Models.CalendarGetScheduleEntryResponse>;
    /**
     * @param entryId The schedule entry Id.
     * @param callback The callback
     */
    getScheduleEntry(entryId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData>): void;
    /**
     * @param entryId The schedule entry Id.
     * @param options The optional parameters
     * @param callback The callback
     */
    getScheduleEntry(entryId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelServiceContractsCalendarSchedulePatternData>): void;
    /**
     * @summary Get file's calendars.
     * @param fileId Id of the file.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetFileCalendarsResponse>
     */
    getFileCalendars(fileId: string, options?: msRest.RequestOptionsBase): Promise<Models.CalendarGetFileCalendarsResponse>;
    /**
     * @param fileId Id of the file.
     * @param callback The callback
     */
    getFileCalendars(fileId: string, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedCalendarModelsCalendarModel[]>): void;
    /**
     * @param fileId Id of the file.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFileCalendars(fileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CyberjusticeLabKernelSharedCalendarModelsCalendarModel[]>): void;
    /**
     * @summary Amongst the given file Guids, return the ones with current events.
     * @param fileIds The list of files Guids to verify.
     * @param fileStatus File status of the events.
     * @param [options] The optional parameters
     * @returns Promise<Models.CalendarGetFilesWithCurrentEventsResponse>
     */
    getFilesWithCurrentEvents(fileIds: string[], fileStatus: string, options?: msRest.RequestOptionsBase): Promise<Models.CalendarGetFilesWithCurrentEventsResponse>;
    /**
     * @param fileIds The list of files Guids to verify.
     * @param fileStatus File status of the events.
     * @param callback The callback
     */
    getFilesWithCurrentEvents(fileIds: string[], fileStatus: string, callback: msRest.ServiceCallback<string[]>): void;
    /**
     * @param fileIds The list of files Guids to verify.
     * @param fileStatus File status of the events.
     * @param options The optional parameters
     * @param callback The callback
     */
    getFilesWithCurrentEvents(fileIds: string[], fileStatus: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<string[]>): void;
}
//# sourceMappingURL=calendar.d.ts.map