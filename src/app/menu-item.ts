export interface MenuItem {
  text: string;
  disabled?: boolean;
  icon?: string;
  url?: string;
  children?: MenuItem[];
}
