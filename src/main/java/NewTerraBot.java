import org.telegram.telegrambots.bots.TelegramLongPollingBot;
import org.telegram.telegrambots.meta.api.methods.send.SendMessage;
import org.telegram.telegrambots.meta.api.objects.Update;
import org.telegram.telegrambots.meta.exceptions.TelegramApiException;

public class NewTerraBot extends TelegramLongPollingBot {

    private final String botToken;
    private final String chatId;

    public NewTerraBot(String botToken, String chatId) {
        this.botToken = botToken;
        this.chatId = chatId;
    }
    @Override
    public void onUpdateReceived(Update update) {

    }

    @Override
    public String getBotUsername() {
        return "NewTerraBot_bot";
    }

    @Override
    public String getBotToken() {
        return botToken;
    }

    public void sendMessage(String text) {
        SendMessage message = new SendMessage();
        message.setChatId(chatId);
        message.setText(text);

        try {
            execute(message);
        } catch (TelegramApiException e) {
            e.printStackTrace();
        }
    }
}