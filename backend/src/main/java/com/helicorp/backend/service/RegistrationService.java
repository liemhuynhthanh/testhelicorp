package com.helicorp.backend.service;

import com.helicorp.backend.dto.RegistrationDTO;
import com.helicorp.backend.entity.Registration;
import com.helicorp.backend.repository.RegistrationRepository;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class RegistrationService {

    private final RegistrationRepository repository;

    public RegistrationService(RegistrationRepository repository) {
        this.repository = repository;
    }

    public Registration register(RegistrationDTO dto) {
        // Kiểm tra email đã tồn tại chưa
        if (repository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("Email này đã được đăng ký trước đó.");
        }

        Registration registration = new Registration();
        registration.setFullName(dto.getFullName());
        registration.setEmail(dto.getEmail());
        registration.setPhoneNumber(dto.getPhone());

        return repository.save(registration);
    }
}
