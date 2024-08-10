export interface IQSet {
    _id?: String;
    questionSet: String;
    tech: String;
    notes: String;
    isActive: Boolean | undefined;
    createdBy: String | undefined;
    createdAt: Date | undefined;
    updatedBy: String | undefined;
    updatedAt: Date | undefined;
}