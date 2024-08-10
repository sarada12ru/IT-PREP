export interface ITech {
    _id?: String;
    tech: String;
    notes: String;
    createdBy?: String | undefined;
    createdAt?: Date | undefined;
    updatedBy?: String | undefined;
    updatedAt?: Date | undefined;
}