// pipeline {
//     agent any
//     tools {nodejs "node"}
//     stages {
//         stage('build') {
//             steps {
//                 sh 'node --version'
//                 sh 'npm install'
//                 sh 'npm run start'
//             }
//         }
//     }
// }
pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'node --version'
            }
        }
    }
}