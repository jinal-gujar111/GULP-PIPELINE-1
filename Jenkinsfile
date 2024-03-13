pipeline {
    agent any

    tools {
        nodejs 'NodeJS' // Use 'NodeJS' for the Node.js tool installation
        git 'Default' // Use 'Default' for the default Git installation
    }

    environment {
        GITHUB_USERNAME = credentials('github-username')
        GITHUB_PASSWORD = credentials('github-password')
        NODEJS_VERSION = '20.1.0' // Update this with the required Node.js version
    }

    stages {
        stage('Setup Node.js') {
            steps {
                script {
                    def nodejsHome = tool 'NodeJS'
                    env.PATH = "${nodejsHome}/bin:${env.PATH}"
                    sh "npm install -g n"
                    sh "n ${NODEJS_VERSION}"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    echo 'Building...'
                    sh 'npm install'

                    // Run Gulp tasks
                    sh 'gulp welcome-message'
                    sh 'gulp copy_file'
                    sh 'gulp babelTest'
                    sh 'gulp styles'

                    // Configure Git user
                    sh 'git config --global user.email "jinalgujar0328@gmail.com"'
                    sh 'git config --global user.name "Jinal"'

                    // Commit artifacts to the repository
                    sh 'git add dist'
                    sh 'git commit -m "Add build artifacts" || true'

                    // Push changes to the repository with GitHub credentials
                    withCredentials([username(usernameVariable: 'GITHUB_USERNAME', passwordVariable: 'GITHUB_PASSWORD', credentialsId: 'github-username')]) {
                        sh "git push https://$GITHUB_USERNAME:$GITHUB_PASSWORD@github.com/jinal-gujar111/GULP-PIPELINE-1.git HEAD:main"
                    }
                }
            }
            post {
                success {
                    archiveArtifacts 'dist/**/*'
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
                echo 'No tests specified, skipping...'
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
