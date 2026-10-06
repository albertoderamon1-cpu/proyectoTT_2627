const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://omqdwavqyokpsfxgmfjn.supabase.co';
const supabaseKey = 'sb_publishable_gtp4PbDxYgCpRxA4X6cAIA_Bh1nQh95';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
