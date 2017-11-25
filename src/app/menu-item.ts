export interface MenuItem {
  text: string;
  disabled?: boolean;
  disabledMessage?: string;
  icon?: string;
  url?: string;
  children?: MenuItem[];
}
