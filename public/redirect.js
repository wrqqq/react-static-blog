function redirect() {
    if (typeof window !== 'undefined') {
        // browser-only code
        if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
                if (user) {
                    window.netlifyIdentity.on("login", () => {
                        document.location.href = "/admin/";
                    });
                }
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", redirect);