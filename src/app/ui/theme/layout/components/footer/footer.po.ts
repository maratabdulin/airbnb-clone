import { PageObject } from "@app/core/testing";

import { FooterComponent } from "./footer.component";

enum FooterAutomation {
  FooterCopyright = "footer-copyright",
  FooterLinkTwitter = "footer-link-twitter",
  FooterLinkFacebook = "footer-link-facebook",
  FooterLinkYoutube = "footer-link-youtube",
  FooterLinkTelegram = "footer-link-telegram",
}

export class FooterComponentPo extends PageObject<FooterComponent> {
  get footerCopyright(): string | null {
    return this.text(FooterAutomation.FooterCopyright);
  }

  get footerLinkTwitterHref(): string | null {
    return (
      this.getByAutomationId(FooterAutomation.FooterLinkTwitter)?.attributes[
        "href"
      ] ?? null
    );
  }

  get footerLinkYoutubeHref(): string | null {
    return (
      this.getByAutomationId(FooterAutomation.FooterLinkYoutube)?.attributes[
        "href"
      ] ?? null
    );
  }

  get footerLinkTelegramHref(): string | null {
    return (
      this.getByAutomationId(FooterAutomation.FooterLinkTelegram)?.attributes[
        "href"
      ] ?? null
    );
  }

  get footerLinkFacebookHref(): string | null {
    return (
      this.getByAutomationId(FooterAutomation.FooterLinkFacebook)?.attributes[
        "href"
      ] ?? null
    );
  }
}
