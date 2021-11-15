const fs = require('fs');

// constants
const mergeFolderPath = `${process.cwd()}/tmp`;
const baseFolderPath = `/home/runner/work/crowdin-sync-repo/crowdin-sync-repo/locales-json`;

const ignorableFolders = ['en', '.DS_Store'];

const ignorableFiles = [
  '602198.yml',
  'Auto_Triage_keys.json',
  'Raven',
  'Robo_Assist_keys.json',
  'SR-454243.yaml',
  'SR-475094',
  'Touchstone',
  'agentAssist.json',
  'freshdesk-analytics.properties',
  // misc
  '.DS_Store'
];

const codeMappings = {
  'es-MX': 'es-LA',
  'es-ES': 'es',
  'ja': 'ja-JP',
  'no': 'nb-NO',
  'ru': 'ru-RU',
  'lv': 'lv-LV'
};

const pluralizeKeys = ['zero', 'two', 'few', 'many'];

// pluralize
const pluralize = (keys) => {
  let pluralized = {};

  for (let key in keys) {
    if (key.endsWith('.other')) {
      let extractedKeyArray = key.split('.');
      extractedKeyArray.pop();
      let extractedKey = extractedKeyArray.join('.');

      let value = keys[key];

      pluralizeKeys.forEach((key) => {
        pluralized[`${extractedKey}.${key}`] = value;
      });
    }
  }

  // merge
  return Object.assign({}, keys, pluralized);
};

(() => {
  // proceed
  console.log(`🏁 Starting merge with: ${mergeFolderPath}`);
  console.log(`🎯 Targetted merge: ${baseFolderPath}`);

  // let lang = process.argv[2];

  let langs = fs.readdirSync(mergeFolderPath);
  console.log(langs);
  langs.forEach((lang) => {
    console.log('........................');

    if (ignorableFolders.includes(lang)) {
      console.log(`skipped folder: ${lang}`);
      return true;
    }

    console.log(`Proccessing folder: ${lang}`);

    let files = fs.readdirSync(`${mergeFolderPath}/${lang}`);

    let [localeFile] = files.filter((file) => !ignorableFiles.includes(file));
    console.log("Locale File:", localeFile);
    let keys = JSON.parse(fs.readFileSync(`${mergeFolderPath}/${lang}/${localeFile}`, { encoding: 'utf-8' }));

    // pluralize
    console.log(`pluralizing file: ${localeFile}`);
    let pluralizedJSON = pluralize(keys);

    // mapping
    let code = codeMappings[lang] || lang;
    if (lang !== code) {
      console.log(`🔄 mapping found: ${lang} -> ${code}`);
    }

    // merge
    let writePath = `${baseFolderPath}/${localeFile}`;
    let fileExists = fs.existsSync(writePath);
    if (!fileExists) {
      console.log(`File not found: ${writePath}`);
      return true;
    }

    fs.writeFileSync(`${baseFolderPath}/${localeFile}`, JSON.stringify(pluralizedJSON, null, 4));
    console.log(`Updated file: ${writePath}`);
  });
})();