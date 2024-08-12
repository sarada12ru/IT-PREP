export interface IQNA {
    _id?: String;
    question: String;
    hint: String;
    answer: String;
    code: String;
    questionSet: String;
    tech: String;
    createdBy?: String | undefined;
    createdAt?: Date | undefined;
    updatedBy?: String | undefined;
    updatedAt?: Date | undefined;
}