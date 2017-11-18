export interface MenuItem {
  text: string;
  disabled?: boolean;
  icon: string;
  route?: string;
  children?: MenuItem[];
}
