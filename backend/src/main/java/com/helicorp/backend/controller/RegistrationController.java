package com.helicorp.backend.controller;

import com.helicorp.backend.dto.RegistrationDTO;
import com.helicorp.backend.entity.Registration;
import com.helicorp.backend.service.RegistrationService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/registrations")
public class RegistrationController {

    private final RegistrationService service;

    public RegistrationController(RegistrationService service) {
        this.service = service;
    }

    /**
     * POST /api/v1/registrations
     * Nhận thông tin đăng ký từ Landing Page và lưu vào database.
     */
    @PostMapping
    public ResponseEntity<Map<String, Object>> register(@Valid @RequestBody RegistrationDTO dto) {
        try {
            Registration saved = service.register(dto);
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm.");
            response.put("id", saved.getId());
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            Map<String, Object> error = new HashMap<>();
            error.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.CONFLICT).body(error);
        }
    }

    /**
     * Xử lý lỗi validation từ @Valid — trả về map các lỗi theo từng field.
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidationErrors(MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach(error -> {
            String field = ((FieldError) error).getField();
            String message = error.getDefaultMessage();
            errors.put(field, message);
        });
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
}
