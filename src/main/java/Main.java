public class Main {
    public static void main(String[] args) {
        String botToken = "ВАШ_ТОКЕН_БОТА";
        String chatId = "ВАШ_CHAT_ID"; // ID чата, куда бот будет отправлять сообщения

        NewTerraBot bot = new NewTerraBot(botToken, chatId);

        // Пример отправки сообщения
        bot.sendMessage("Привет! Это тестовое сообщение от бота.");

    }
}
