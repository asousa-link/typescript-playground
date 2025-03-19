type AppUser = {
    name: string;
    age: number;
    permissions: {
        id: string;
        title: string;
        description: string;
    }[]
}

// extract permissions array as a type
type Perms = AppUser["permissions"];

// extract type from array
type Perm = Perms[number];

type Names = string[];
type Name = Names[number];