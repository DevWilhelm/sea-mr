import {
  HardHat,
  Stethoscope,
  Zap,
  Truck,
  Car,
  Search,
  Compass,
  MapPin,
  Handshake,
  Link as LinkIcon,
  BarChart3,
  Network,
  Users,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  HardHat,
  Stethoscope,
  Zap,
  Truck,
  Car,
  Search,
  Compass,
  MapPin,
  Handshake,
  Link: LinkIcon,
  BarChart3,
  Network,
  Users,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Search;
}
