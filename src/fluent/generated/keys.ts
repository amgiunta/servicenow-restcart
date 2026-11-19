import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'd09dd4c596b146468e4acd199a602ddb'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'a7eeece6aee34201a14f31c6672bad06'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: '3db64097660e4a3aab06bfe0e0d2fbd2'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '1a900d2b5897427ba947cd00b615a783'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '499639969ce2467cb2ced6308a94439c'
                    }
                }
            }
        }
    }
}
