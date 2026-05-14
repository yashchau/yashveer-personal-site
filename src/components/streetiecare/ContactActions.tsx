import CopyButton from "./CopyButton";
import { phoneHref, whatsappHref } from "./utils";

interface ContactActionsProps {
  phone: string;
  whatsapp?: string;
  address?: string;
  copyPhoneLabel?: string;
}

export default function ContactActions({
  phone,
  whatsapp,
  address,
  copyPhoneLabel = "Copy number",
}: ContactActionsProps) {
  const whatsappUrl = whatsappHref(whatsapp);

  return (
    <div className="grid gap-2 sm:grid-cols-3">
      <a href={phoneHref(phone)} className="primary-button min-h-11 justify-center px-4 py-2 text-sm">
        Call
      </a>
      {whatsappUrl ? (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-button min-h-11 justify-center px-4 py-2 text-sm"
        >
          WhatsApp
        </a>
      ) : (
        <span className="secondary-button min-h-11 cursor-not-allowed justify-center px-4 py-2 text-sm opacity-60">
          No WhatsApp
        </span>
      )}
      <CopyButton value={address ?? phone} label={address ? "Copy address" : copyPhoneLabel} className="min-h-11" />
    </div>
  );
}
