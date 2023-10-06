require('dotenv').config()
const fs = require('fs');
const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = process.env.SUPABASE_URL
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseBucketName = process.env.SUPABASE_BUCKET_NAME

const supabase = createClient(supabaseUrl, supabaseAnonKey)

const uploadFile = async () => {
  // generate a file name with current date
  const fileName = `${new Date().toISOString()}.sql`
  const buf = fs.readFileSync(__dirname + '/file/dump.sql');

  const { data, error } = await supabase.storage
    .from(supabaseBucketName)
    .upload(fileName, buf)

  console.log('🚀 ~ file: index.js ~ line 13 ~ uploadFile ~ error', error)
  console.log('🚀 ~ file: index.js ~ line 15 ~ uploadFile ~ data', data)
}

uploadFile()
