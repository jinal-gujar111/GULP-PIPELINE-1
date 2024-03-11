pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'npm install'
                }
            }
        }

        stage('Gulp') {
            steps {
                script {
                    echo 'Running Gulp tasks...'
                    sh 'gulp welcome-message'
                    sh 'gulp copy_file'
                    sh 'gulp babelTest'
                    sh 'gulp styles'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying...'
                // Add deployment steps if needed
                sh 'npm start &'
            }
        }
    }
}
