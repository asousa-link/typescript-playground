type FileData = {
    path: string;
    content: string;
};

type DatabaseData = {
    connectionURL: string;
    credentials: string;
};

type Status = {
    isOpen: boolean;
    errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDataBase = DatabaseData & Status;

// can also be used with interfaces
// interface AccessedFileData extends Filedata, Status;