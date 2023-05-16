import { generateDeploymentConfig } from "scripts";
const config = generateDeploymentConfig("app_debug");

config.google_drive = {
  sheets_folder_id: "1ja6lzbphZaxnVv5mpQ4YHnn2qmxMiEBW",
  assets_folder_id: "1bNvUKN47YZAbMnRA1ThzSLGxLTd0mfDb",
};

config.git = {
  content_repo: "https://github.com/jfmcquade/app-debug",
  content_tag_latest: "1.0.0",
};

config.app_data.output_path = "./app_data";

// Override any app constants here
config.app_config.APP_HEADER_DEFAULTS.title = "app_debug";
config.app_config.APP_SIDEMENU_DEFAULTS.title = "app_debug";

export default config;