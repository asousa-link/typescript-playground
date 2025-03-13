enum Role {
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

// Alternative
let userRoleLiteralTypes: "Admin" | "Editor" | "Guest";

userRoleLiteralTypes = "Admin";