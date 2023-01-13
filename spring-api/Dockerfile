FROM openjdk:17-alpine
RUN addgroup -S spring && adduser -S spring -G spring
USER spring:spring
ARG jar_file=target/spring-react-0.0.1-SNAPSHOT.jar
COPY ${jar_file} app.jar
ENTRYPOINT ["java" ,"-jar","/app.jar"]