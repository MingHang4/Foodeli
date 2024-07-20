
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tgnetasxtrnyjtyanvgl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRnbmV0YXN4dHJueWp0eWFudmdsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0NzA5NDEsImV4cCI6MjAzNzA0Njk0MX0.soXEeb7VPudV5U0Ez056G37o6sJKDHggSRu1G6x-rVA'
export const supabase = createClient(supabaseUrl, supabaseKey)