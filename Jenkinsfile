pipeline {
    agent any
    tools {
        nodejs "NodeJS"
        git 'Default' // Use 'Default' for the default Git installation
    }
    environment {
        GITHUB_USERNAME = credentials('github-username')
        GITHUB_PASSWORD = credentials('github-password')
    }
    stages {
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
                    echo 'Installing Gulp globally...'
                    sh 'npm install -g gulp'
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
