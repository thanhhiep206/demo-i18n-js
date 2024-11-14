# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin "i18n-js", to: "https://esm.sh/i18n-js@latest/dist/import/index.js"
pin "load_locale", to: "load_locale.js"
pin_all_from "app/javascript/controllers", under: "controllers"
