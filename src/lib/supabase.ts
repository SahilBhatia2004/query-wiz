import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gttxppgkiomlpgriuyru.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dHhwcGdraW9tbHBncml1eXJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2MDgxMTUsImV4cCI6MjA2OTE4NDExNX0.6kiylLVgDy1IIOBeqRwYrWWnlFzzVMN_M_nK11i0hzI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)