import type { Metadata } from "next";
import PageHeader from "@/components/streetiecare/PageHeader";
import ProtocolList from "@/components/streetiecare/ProtocolList";

export const metadata: Metadata = {
  title: "Protocols | Streetie Care Bangalore",
  description: "Step-by-step prototype guides for medical care, lost and found, ABC, adoption, legal support, community care, and wildlife.",
};

export default function ProtocolsPage() {
  return (
    <div className="space-y-10">
      <PageHeader
        title="Step-by-step protocols"
        description="Simple guides for common street animal situations. Start with the closest topic, then call a qualified vet, legal professional, or trained rescuer when needed."
      />
      <ProtocolList />
    </div>
  );
}
