import { Controller } from "@hotwired/stimulus"
import { I18n } from "i18n-js"

export default class extends Controller {
  async connect() {
    try {
      const response = await fetch('load_locale.json');
      const translations = await response.json();

      const i18n = new I18n(translations);

      i18n.locale = document.body.dataset['locale'];

      this.element.textContent = i18n.t("hello");

    } catch (error) {
      console.error("Error loading translations:", error);
    }
  }
}
