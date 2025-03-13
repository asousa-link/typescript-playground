/* enum Role {
    Admin,
    Editor,
    Guest
}

let userRole: Role = 0; // 0 = Admin, 1 = Editor, 2 = Guest
userRole = Role.Editor;

enum Role2 {
    Admin = 'Admin',
    Editor = 'Editor',
    Guest = 'Guest'
}
*/

// Alternative
let userRoleLit: "Admin" | "Editor" | "Guest";

userRoleLit = "Admin";

type Role = "Admin" | "Editor" | "Guest" | "Reader";

let userRole: Role;

function access(role: Role) { }

type User = {
    name: string;
    age: number;
    role: Role;
    permissions: string[];
};