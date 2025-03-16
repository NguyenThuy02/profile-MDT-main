import { createClient } from "@supabase/supabase-js";

// Lấy thông tin từ biến môi trường (sẽ cấu hình sau)
const supabaseUrl = "https://vkqbaxfiigsoqdwhvfsc.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrcWJheGZpaWdzb3Fkd2h2ZnNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE2ODQ4NDYsImV4cCI6MjA1NzI2MDg0Nn0.V8-DxhI-LribGJGID3YKcp5zR2-YzCL6lFW90IRxHZE";

// Khởi tạo client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
