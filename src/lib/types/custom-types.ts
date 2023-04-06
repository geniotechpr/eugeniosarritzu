// Custom shared types for the project

// Social media icon for Footer component
export interface Social {
  name: string;
  href: string;
}

// Route for Header component
export interface Route {
  name: string;
  href: string;
}

// Adjective for HomeHeader component
export interface Adjective {
  id: string;
  emoji: string;
}

// Preview for HomePreview component
export interface Preview {
  imgSource: string;
  title: string;
  description: string;
  labelText: string;
  labelClass: string;
}

// TimelineBlock for Timeline component
export interface TimelineBlock {
  date: string;
  title: string;
  description: string;
}
