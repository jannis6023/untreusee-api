export interface WeatherData {
  end_device_ids:  EndDeviceIDS;
  correlation_ids: string[];
  received_at:     string;
  uplink_message:  UplinkMessage;
}

export interface EndDeviceIDS {
  device_id:       string;
  application_ids: ApplicationIDS;
  dev_eui:         string;
  join_eui:        string;
  dev_addr:        string;
}

export interface ApplicationIDS {
  application_id: string;
}

export interface UplinkMessage {
  session_key_id:   string;
  f_port:           number;
  f_cnt:            number;
  frm_payload:      string;
  decoded_payload:  DecodedPayload;
  rx_metadata:      RxMetadatum[];
  settings:         Settings;
  received_at:      string;
  consumed_airtime: string;
  version_ids:      VersionIDS;
  network_ids:      NetworkIDS;
}

export interface DecodedPayload {
  ALARM_status: string;
  BatV:         number;
  Temp_Black:   number;
  Temp_Red:     number;
  Temp_White:   number;
  Work_mode:    string;
}

export interface NetworkIDS {
  net_id:          string;
  ns_id:           string;
  tenant_id:       string;
  cluster_id:      string;
  cluster_address: string;
}

export interface RxMetadatum {
  gateway_ids:      GatewayIDS;
  timestamp:        number;
  rssi:             number;
  channel_rssi:     number;
  snr:              number;
  frequency_offset: string;
  uplink_token:     string;
  channel_index:    number;
  received_at:      string;
}

export interface GatewayIDS {
  gateway_id: string;
  eui:        string;
}

export interface Settings {
  data_rate: DataRate;
  frequency: string;
  timestamp: number;
}

export interface DataRate {
  lora: Lora;
}

export interface Lora {
  bandwidth:        number;
  spreading_factor: number;
  coding_rate:      string;
}

export interface VersionIDS {
  brand_id:         string;
  model_id:         string;
  hardware_version: string;
  firmware_version: string;
  band_id:          string;
}
