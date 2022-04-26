require('dotenv').config()

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const uploadFile = async () => {
  // generate a file name with current date
  const fileName = `${new Date().toISOString()}.sql`
  const { data, error } = await supabase.storage
    .from('tavivo-backup')
    .upload(fileName, './file/dump.sql')

  console.log('🚀 ~ file: index.js ~ line 13 ~ uploadFile ~ error', error)
  console.log('🚀 ~ file: index.js ~ line 15 ~ uploadFile ~ data', data)
}

uploadFile()
