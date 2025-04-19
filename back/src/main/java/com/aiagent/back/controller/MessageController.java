package com.aiagent.back.controller;

import com.aiagent.back.entity.Message;
import com.aiagent.back.repository.MessageRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/message")
public class MessageController {

    private final MessageRepository messageRepository;

    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @PostMapping
    public Message save(@RequestBody Message message) {
        return messageRepository.save(message);
    }

    @GetMapping
    public List<Message> getAll() {
        return messageRepository.findAll();
    }
}
